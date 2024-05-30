const db = require("./models");
const Product  = db.product;
const Role  = db.role;

exports.initial = () => {
    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id: 2,
        name: "moderator"
    });

    Role.create({
        id: 3,
        name: "admin"
    });
}

exports.initialProduct = () => {
    Product.create({
        id: 1,
        nama_product: 'chair',
        qty_product: 1
    })
    Product.create({
        id: 2,
        nama_product: 'stool',
        qty_product: 1
    })
    Product.create({
        id: 3,
        nama_product: 'table',
        qty_product: 1
    })
    Product.create({
        id: 4,
        nama_product:'mug',
        qty_product: 1
    })
    Product.create({
        id: 5,
        nama_product: 'cup',
        qty_product: 1
    })
    Product.create({
        id: 6,
        nama_product: 'desk lamp',
        qty_product: 1
    })
    Product.create({
        id: 7,
        nama_product: 'floor lamp',
        qty_product: 1
    })
    Product.create({
        id: 8,
        nama_product: ' desk',
        qty_product: 1
    })
    Product.create({
        id: 9,
        nama_product: 'shelf',
        qty_product: 1
    })
    Product.create({
        id: 10,
        nama_product: 'sofa',
        qty_product: 1
    })
    Product.create({
        id: 11,
        nama_product: 'tea cup',
        qty_product: 1
    })
    Product.create({
        id: 12,
        nama_product: 'tea pot',
        qty_product: 1
    })
    Product.create({
        id: 13,
        nama_product: 'cutlery',
        qty_product: 1
    })
    Product.create({
        id: 14,
        nama_product: 'chess set',
        qty_product: 1
    })
    Product.create({
        id: 15,
        nama_product: 'lounge',
        qty_product: 1
    })
    Product.create({
        id: 16,
        nama_product: ' alarm clock',
        qty_product: 1
    })
    Product.create({
        id: 17,
        nama_product: 'phone dock',
        qty_product: 1
    })
    Product.create({
        id: 18,
        nama_product: 'keyboard',
        qty_product: 1
    })
    Product.create({
        id: 19,
        nama_product: 'side table',
        qty_product: 1
    })
    Product.create({
        id: 20,
        nama_product: 'wallet',
        qty_product: 1
    })
    Product.create({
        id: 21,
        nama_product: 'vase',
        qty_product: 1
    })
    Product.create({
        id: 22,
        nama_product: 'dog bed',
        qty_product: 1
    })
    Product.create({
        id: 23,
        nama_product: 'bird house',
        qty_product: 1
    })
    Product.create({
        id: 24,
        nama_product: 'wine holder',
        qty_product: 1
    })
    Product.create({
        id: 25,
        nama_product: 'skateboard',
        qty_product: 1
    })
    Product.create({
        id: 26,
        nama_product: 'calculator',
        qty_product: 1
    })
    Product.create({
        id: 27,
        nama_product: 'coathanger',
        qty_product: 1
    })
    Product.create({
        id: 28,
        nama_product: 'salt & pepper shaker',
        qty_product: 1
    })
    Product.create({
        id: 29,
        nama_product: 'coasters',
        qty_product: 1
    })
    Product.create({
        id: 30,
        nama_product: "piggy bank",
        qty_product: 1
    })
    Product.create({
        id: 31,
        nama_product: "headphones",
        qty_product: 1
    })
    Product.create({
        id: 32,
        nama_product: "sculpture",
        qty_product: 1
    })
    Product.create({
        id: 33,
        nama_product: "telephone",
        qty_product: 1
    })
    Product.create({
        id: 34,
        nama_product: "flashlight",
        qty_product: 1
    })
    Product.create({
        id: 35,
        nama_product: "mail sorter",
        qty_product: 1
    })
    Product.create({
        id: 36,
        nama_product: "playing cards",
        qty_product: 1
    })
    Product.create({
        id: 37,
        nama_product: "fan",
        qty_product: 1
    })
    Product.create({
        id: 38,
        nama_product: "jewelry box",
        qty_product: 1
    })
    Product.create({
        id: 39,
        nama_product: "mouse",
        qty_product: 1
    })
    Product.create({
        id: 40,
        nama_product: "lantern",
        qty_product: 1
    })
    Product.create({
        id: 41,
        nama_product: "walking cane",
        qty_product: 1
    })
    Product.create({
        id: 42,
        nama_product: "sword",
        qty_product: 1
    })
    Product.create({
        id: 43,
        nama_product: "wall clock",
        qty_product: 1
    })
    Product.create({
        id: 44,
        nama_product: "mirror",
        qty_product: 1
    })
    Product.create({
        id: 45,
        nama_product: "bed",
        qty_product: 1
    })
    Product.create({
        id: 46,
        nama_product: "crib",
        qty_product: 1
    })
    Product.create({
        id: 47,
        nama_product: "hammock",
        qty_product: 1
    })
    Product.create({
        id: 48,
        nama_product: "plate",
        qty_product: 1
    })
    Product.create({
        id: 49,
        nama_product: "bowl",
        qty_product: 1
    })
    Product.create({
        id: 50,
        nama_product: "coffee mug",
        qty_product: 1
    })
    Product.create({
        id: 51,
        nama_product: "espresso cup",
        qty_product: 1
    })
    Product.create({
        id: 52,
        nama_product: "glasses",
        qty_product: 1
    })
    Product.create({
        id: 53,
        nama_product: "fork",
        qty_product: 1
    })
    Product.create({
        id: 54,
        nama_product: "spoon",
        qty_product: 1
    })
    Product.create({
        id: 55,
        nama_product: "knife",
        qty_product: 1
    })
    Product.create({
        id: 56,
        nama_product: "serving tray",
        qty_product: 1
    })
    Product.create({
        id: 57,
        nama_product: "toy train",
        qty_product: 1
    })
    Product.create({
        id: 58,
        nama_product: "action figure",
        qty_product: 1
    })
    Product.create({
        id: 59,
        nama_product: "lamp shade",
        qty_product: 1
    })
    Product.create({
        id: 60,
        nama_product: "cutting board",
        qty_product: 1
    })
    Product.create({
        id: 61,
        nama_product: "dresser",
        qty_product: 1
    })
    Product.create({
        id: 62,
        nama_product: "shoe rack",
        qty_product: 1
    })
    Product.create({
        id: 63,
        nama_product: "rocking chair",
        qty_product: 1
    })
    Product.create({
        id: 64,
        nama_product: "usb key",
        qty_product: 1
    })
    Product.create({
        id: 65,
        nama_product: "8 ball",
        qty_product: 1
    })
    Product.create({
        id: 66,
        nama_product: "frying pan",
        qty_product: 1
    })
    Product.create({
        id: 67,
        nama_product: "drawer handle",
        qty_product: 1
    })
    Product.create({
        id: 68,
        nama_product: "doorknob",
        qty_product: 1
    })
    Product.create({
        id: 69,
        nama_product: "cable organizer",
        qty_product: 1
    })
    Product.create({
        id: 70,
        nama_product: "planter pot",
        qty_product: 1
    })
    Product.create({
        id: 71,
        nama_product: "coat hanger",
        qty_product: 1
    })
    Product.create({
        id: 72,
        nama_product: "bottle opener",
        qty_product: 1
    })
    Product.create({
        id: 73,
        nama_product: "can opener",
        qty_product: 1
    })
    Product.create({
        id: 74,
        nama_product: "coasters",
        qty_product: 1
    })
    Product.create({
        id: 75,
        nama_product: "pocket knife",
        qty_product: 1
    })
    Product.create({
        id: 76,
        nama_product: "surfboard",
        qty_product: 1
    })
    Product.create({
        id: 77,
        nama_product: "shoes",
        qty_product: 1
    })
    Product.create({
        id: 78,
        nama_product: "book",
        qty_product: 1
    })
    Product.create({
        id: 79,
        nama_product: "calendar",
        qty_product: 1
    })
    Product.create({
        id: 80,
        nama_product: "house numbers",
        qty_product: 1
    })
    Product.create({
        id: 81,
        nama_product: "spice rack",
        qty_product: 1
    })
    Product.create({
        id: 82,
        nama_product: "suitcase",
        qty_product: 1
    })
    Product.create({
        id: 83,
        nama_product: "button",
        qty_product: 1
    })
    Product.create({
        id: 84,
        nama_product: "ring",
        qty_product: 1
    })
    Product.create({
        id: 85,
        nama_product: "baking tray",
        qty_product: 1
    })
    Product.create({
        id: 86,
        nama_product: "tape dispenser",
        qty_product: 1
    })
    Product.create({
        id: 87,
        nama_product: "flower pot",
        qty_product: 1
    })
    Product.create({
        id: 88,
        nama_product: "canoe",
        qty_product: 1
    })
    Product.create({
        id: 89,
        nama_product: "basket",
        qty_product: 1
    })
    Product.create({
        id: 90,
        nama_product: "pillow",
        qty_product: 1
    })
    Product.create({
        id: 91,
        nama_product: "rug",
        qty_product: 1
    })
    Product.create({
        id: 92,
        nama_product: "wall tile",
        qty_product: 1
    })
    Product.create({
        id: 93,
        nama_product: "road bike",
        qty_product: 1
    })
    Product.create({
        id: 94,
        nama_product: "bike seat",
        qty_product: 1
    })
    Product.create({
        id: 95,
        nama_product: "handlebars",
        qty_product: 1
    })
}
