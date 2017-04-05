let ItemService = {
    item: null,
    setItem(item) {
        this.item = item;
    },
    getItem() {
        return this.item;
    }
}

export default ItemService;