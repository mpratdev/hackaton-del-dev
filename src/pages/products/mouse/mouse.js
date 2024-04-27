import {
    logitech,
    razer,
    zowie
} from "../../../../public/products/mouse.json";

const { basilisk, deathadder, viper } = razer;
const { mxmaster3, prox, shroud } = logitech;
const { ec2c, ec2v2white, za12c } = zowie;

export const pages = [
    {
        mouse: "basilisk",
        name: basilisk.name,
        description: basilisk.description,
        image: basilisk.image,
        originalPrice: basilisk["original-price"],
        offertPrice: basilisk["offert-price"],
        brand: basilisk.brand,
        type: basilisk.type,
    },
    {
        mouse: "deathadder",
        name: deathadder.name,
        description: deathadder.description,
        image: deathadder.image,
        originalPrice: deathadder["original-price"],
        offertPrice: deathadder["offert-price"],
        brand: deathadder.brand,
        type: deathadder.type,
    },
    {
        mouse: "viper",
        name: viper.name,
        description: viper.description,
        image: viper.image,
        originalPrice: viper["original-price"],
        offertPrice: viper["offert-price"],
        brand: viper.brand,
        type: viper.type,
    },
    {
        mouse: "mxmaster3",
        name: mxmaster3.name,
        description: mxmaster3.description,
        image: mxmaster3.image,
        originalPrice: mxmaster3["original-price"],
        offertPrice: mxmaster3["offert-price"],
        brand: mxmaster3.brand,
        type: mxmaster3.type,
    },
    {
        mouse: "prox",
        name: prox.name,
        description: prox.description,
        image: prox.image,
        originalPrice: prox["original-price"],
        offertPrice: prox["offert-price"],
        brand: prox.brand,
        type: prox.type,
    },
    {
        mouse: "shroud",
        name: shroud.name,
        description: shroud.description,
        image: shroud.image,
        originalPrice: shroud["original-price"],
        offertPrice: shroud["offer-price"],
        brand: shroud.brand,
        type: shroud.type,
    },
    {
        mouse: "ec2c",
        name: ec2c.name,
        description: ec2c.description,
        image: ec2c.image,
        originalPrice: ec2c["original-price"],
        offertPrice: ec2c["offert-price"],
        brand: ec2c.brand,
        type: ec2c.type,
    },
    {
        mouse: "ec2v2white",
        name: ec2v2white.name,
        description: ec2v2white.description,
        image: ec2v2white.image,
        originalPrice: ec2v2white["original-price"],
        offertPrice: ec2v2white["offert-price"],
        brand: ec2v2white.brand,
        type: ec2v2white.type,
    },
    {
        mouse: "za12c",
        name: za12c.name,
        description: za12c.description,
        image: za12c.image,
        originalPrice: za12c["original-price"],
        offertPrice: za12c["offer-price"],
        brand: za12c.brand,
        type: za12c.type,
    }
];