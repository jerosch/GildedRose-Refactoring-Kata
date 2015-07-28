function Item(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
}

var items = [];

function update_quality() {

    function updateItem(item) {

        var updater = {
            AGED_BRIE: {
                updateQualityBefore: increaseQuality,
                updateSellIn: decreaseSellIn,
                updateQualityAfter: increaseQuality
            },
            BACKSTAGE_PASSES: {
                updateQualityBefore: function () {
                    if (item.sell_in < 6) {
                        increaseQuality(3);
                    } else if (item.sell_in < 11) {
                        increaseQuality(2);
                    } else {
                        increaseQuality();
                    }
                },
                updateSellIn: decreaseSellIn,
                updateQualityAfter: function() { decreaseQuality(item.quality) }
            },
            NOOP: {
                updateQualityBefore: noop,
                updateSellIn: noop,
                updateQualityAfter: noop
            },
            DEFAULT: {
                updateQualityBefore: decreaseQuality,
                updateSellIn: decreaseSellIn,
                updateQualityAfter: decreaseQuality
            }
        };

        function updaterFor(item) {
            switch (item.name) {
                case 'Aged Brie':
                    return updater.AGED_BRIE;
                case 'Backstage passes to a TAFKAL80ETC concert':
                    return updater.BACKSTAGE_PASSES;
                case 'Sulfuras, Hand of Ragnaros':
                    return updater.NOOP;
                default:
                    return updater.DEFAULT;
            }
        }

        function noop() {
        }


        function increaseQuality(delta) {
            delta = delta || 1;
            item.quality = Math.min(item.quality + delta, 50);
        }

        function decreaseQuality(delta) {
            delta = delta || 1;
            item.quality = Math.max(item.quality - delta, 0);
        }

        function decreaseSellIn() {
            item.sell_in -= 1;
        }

        var updaterForItem = updaterFor(item);
        updaterForItem.updateQualityBefore();
        updaterForItem.updateSellIn();
        if (item.sell_in < 0) {
            updaterForItem.updateQualityAfter();
        }

    }

    items.forEach(updateItem);

}
