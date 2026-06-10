function changeSeason(season) {
    const image = document.getElementById("seasonImage");

    switch (season) {
        case "spring":
            image.src =
                "https://thumbs.dreamstime.com/b/beautiful-blooming-pink-spring-tree-concept-time-nature-background-park-377370863.jpg?w=768" ;
            break;

        case "summer":
            image.src =
                "https://www.dawnq.com/cdn/shop/articles/640-fields-with-an-infinite-sunflower-a-beautiful-landscape-summer-day.jpg?v=1704439175&width=1600"            
            break;

        case "autumn":
            image.src =
                "https://cdn.shopify.com/s/files/1/0554/8077/8821/files/Petunia_plant_480x480.webp?v=1696832078";
            break;

        case "winter":
            image.src =
                "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/clove-5201391_1280_480x480.jpg?v=1714053929";
            break;
    }
}