describe("Gilded Rose", function () {

    var DAY_COUNT = 10;

    var EXPECTED_INVENTORY = "--- Day 0 ---\n" +
        "+5 Dexterity Vest, 10, 20\n" +
        "Aged Brie, 2, 0\n" +
        "Elixir of the Mongoose, 5, 7\n" +
        "Sulfuras, Hand of Ragnaros, 0, 80\n" +
        "Sulfuras, Hand of Ragnaros, -1, 80\n" +
        "Backstage passes to a TAFKAL80ETC concert, 15, 20\n" +
        "Backstage passes to a TAFKAL80ETC concert, 10, 49\n" +
        "Backstage passes to a TAFKAL80ETC concert, 5, 49\n" +
        "Conjured Mana Cake, 3, 6\n" +
        "--- Day 1 ---\n" +
        "+5 Dexterity Vest, 9, 19\n" +
        "Aged Brie, 1, 1\n" +
        "Elixir of the Mongoose, 4, 6\n" +
        "Sulfuras, Hand of Ragnaros, 0, 80\n" +
        "Sulfuras, Hand of Ragnaros, -1, 80\n" +
        "Backstage passes to a TAFKAL80ETC concert, 14, 21\n" +
        "Backstage passes to a TAFKAL80ETC concert, 9, 50\n" +
        "Backstage passes to a TAFKAL80ETC concert, 4, 50\n" +
        "Conjured Mana Cake, 2, 5\n" +
        "--- Day 2 ---\n" +
        "+5 Dexterity Vest, 8, 18\n" +
        "Aged Brie, 0, 2\n" +
        "Elixir of the Mongoose, 3, 5\n" +
        "Sulfuras, Hand of Ragnaros, 0, 80\n" +
        "Sulfuras, Hand of Ragnaros, -1, 80\n" +
        "Backstage passes to a TAFKAL80ETC concert, 13, 22\n" +
        "Backstage passes to a TAFKAL80ETC concert, 8, 50\n" +
        "Backstage passes to a TAFKAL80ETC concert, 3, 50\n" +
        "Conjured Mana Cake, 1, 4\n" +
        "--- Day 3 ---\n" +
        "+5 Dexterity Vest, 7, 17\n" +
        "Aged Brie, -1, 4\n" +
        "Elixir of the Mongoose, 2, 4\n" +
        "Sulfuras, Hand of Ragnaros, 0, 80\n" +
        "Sulfuras, Hand of Ragnaros, -1, 80\n" +
        "Backstage passes to a TAFKAL80ETC concert, 12, 23\n" +
        "Backstage passes to a TAFKAL80ETC concert, 7, 50\n" +
        "Backstage passes to a TAFKAL80ETC concert, 2, 50\n" +
        "Conjured Mana Cake, 0, 3\n" +
        "--- Day 4 ---\n" +
        "+5 Dexterity Vest, 6, 16\n" +
        "Aged Brie, -2, 6\n" +
        "Elixir of the Mongoose, 1, 3\n" +
        "Sulfuras, Hand of Ragnaros, 0, 80\n" +
        "Sulfuras, Hand of Ragnaros, -1, 80\n" +
        "Backstage passes to a TAFKAL80ETC concert, 11, 24\n" +
        "Backstage passes to a TAFKAL80ETC concert, 6, 50\n" +
        "Backstage passes to a TAFKAL80ETC concert, 1, 50\n" +
        "Conjured Mana Cake, -1, 1\n" +
        "--- Day 5 ---\n" +
        "+5 Dexterity Vest, 5, 15\n" +
        "Aged Brie, -3, 8\n" +
        "Elixir of the Mongoose, 0, 2\n" +
        "Sulfuras, Hand of Ragnaros, 0, 80\n" +
        "Sulfuras, Hand of Ragnaros, -1, 80\n" +
        "Backstage passes to a TAFKAL80ETC concert, 10, 25\n" +
        "Backstage passes to a TAFKAL80ETC concert, 5, 50\n" +
        "Backstage passes to a TAFKAL80ETC concert, 0, 50\n" +
        "Conjured Mana Cake, -2, 0\n" +
        "--- Day 6 ---\n" +
        "+5 Dexterity Vest, 4, 14\n" +
        "Aged Brie, -4, 10\n" +
        "Elixir of the Mongoose, -1, 0\n" +
        "Sulfuras, Hand of Ragnaros, 0, 80\n" +
        "Sulfuras, Hand of Ragnaros, -1, 80\n" +
        "Backstage passes to a TAFKAL80ETC concert, 9, 27\n" +
        "Backstage passes to a TAFKAL80ETC concert, 4, 50\n" +
        "Backstage passes to a TAFKAL80ETC concert, -1, 0\n" +
        "Conjured Mana Cake, -3, 0\n" +
        "--- Day 7 ---\n" +
        "+5 Dexterity Vest, 3, 13\n" +
        "Aged Brie, -5, 12\n" +
        "Elixir of the Mongoose, -2, 0\n" +
        "Sulfuras, Hand of Ragnaros, 0, 80\n" +
        "Sulfuras, Hand of Ragnaros, -1, 80\n" +
        "Backstage passes to a TAFKAL80ETC concert, 8, 29\n" +
        "Backstage passes to a TAFKAL80ETC concert, 3, 50\n" +
        "Backstage passes to a TAFKAL80ETC concert, -2, 0\n" +
        "Conjured Mana Cake, -4, 0\n" +
        "--- Day 8 ---\n" +
        "+5 Dexterity Vest, 2, 12\n" +
        "Aged Brie, -6, 14\n" +
        "Elixir of the Mongoose, -3, 0\n" +
        "Sulfuras, Hand of Ragnaros, 0, 80\n" +
        "Sulfuras, Hand of Ragnaros, -1, 80\n" +
        "Backstage passes to a TAFKAL80ETC concert, 7, 31\n" +
        "Backstage passes to a TAFKAL80ETC concert, 2, 50\n" +
        "Backstage passes to a TAFKAL80ETC concert, -3, 0\n" +
        "Conjured Mana Cake, -5, 0\n" +
        "--- Day 9 ---\n" +
        "+5 Dexterity Vest, 1, 11\n" +
        "Aged Brie, -7, 16\n" +
        "Elixir of the Mongoose, -4, 0\n" +
        "Sulfuras, Hand of Ragnaros, 0, 80\n" +
        "Sulfuras, Hand of Ragnaros, -1, 80\n" +
        "Backstage passes to a TAFKAL80ETC concert, 6, 33\n" +
        "Backstage passes to a TAFKAL80ETC concert, 1, 50\n" +
        "Backstage passes to a TAFKAL80ETC concert, -4, 0\n" +
        "Conjured Mana Cake, -6, 0\n" +
        "--- Day 10 ---\n" +
        "+5 Dexterity Vest, 0, 10\n" +
        "Aged Brie, -8, 18\n" +
        "Elixir of the Mongoose, -5, 0\n" +
        "Sulfuras, Hand of Ragnaros, 0, 80\n" +
        "Sulfuras, Hand of Ragnaros, -1, 80\n" +
        "Backstage passes to a TAFKAL80ETC concert, 5, 35\n" +
        "Backstage passes to a TAFKAL80ETC concert, 0, 50\n" +
        "Backstage passes to a TAFKAL80ETC concert, -5, 0\n" +
        "Conjured Mana Cake, -7, 0\n";

    var actual_inventory = '';

    beforeEach(function(){
        items.push(new Item('+5 Dexterity Vest', 10, 20));
        items.push(new Item('Aged Brie', 2, 0));
        items.push(new Item('Elixir of the Mongoose', 5, 7));
        items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
        items.push(new Item('Sulfuras, Hand of Ragnaros', -1, 80));
        items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
        items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49));
        items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49));
        // this conjured item does not work properly yet
        items.push(new Item('Conjured Mana Cake', 3, 6));
    });

    it("should evolve as expected", function () {
        appendItemsForDay(0);
        for (var i = 0; i < DAY_COUNT; i++) {
            update_quality();
            appendItemsForDay(i + 1);
        }
        console.log(actual_inventory);
        expect(actual_inventory).toEqual(EXPECTED_INVENTORY);
    });

    function appendItemsForDay(day) {
        actual_inventory += '--- Day ' + day + ' ---\n';
        items.forEach(appendItem)
    }


    function appendItem(item) {
        actual_inventory += item.name + ', ' + item.sell_in + ', ' + item.quality + '\n';
    }

});
