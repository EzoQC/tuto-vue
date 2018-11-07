export default {
    create(todo) {
        localStorage.setItem(todo.id, JSON.stringify(todo));
    },

    findAll() {
        const data = [];
        const keys = Object.keys(localStorage);
        for (let curKey of keys) {
            let obj = localStorage.getItem(curKey);
            try {
                obj = JSON.parse(obj);
                if (obj != null && typeof obj === 'object') {
                    data.push(obj);
                }
            } catch (ex) {
                // Skip
            }
        }
        return data;
    }
}