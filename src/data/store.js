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
    videos: [
        { src: "/video/BLC1-2x1-IT.mp4", alt: "video1" },
        { src: "/video/STAX-2x1-IT.mp4", alt: "video2" },
        { src: "/public/video/Yugi-Kaiba-Accessories-2x1-IT.mp4", alt: "video3" }
      ]

});

