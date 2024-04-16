import { reactive } from "vue";

export const store = reactive({
    apiUrl: "https://db.ygoprodeck.com/api/v7/",
    attributes: {
        cards: "cardinfo.php",
        cardArchetypes: "archetypes.php"
    },
    cards: [],
    cardArchetypes: [],
    options: {
        params: {
            num: 100,
            offset: 0,
        }
    },

});

