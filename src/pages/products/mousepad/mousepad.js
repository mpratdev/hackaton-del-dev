import {
    artisan,
    zowie
} from "../../../../public/products/mousepad.json";

const { ninjafxhayate, ninjafxraiden, ninjafxzero } = artisan;
const { gsrse, gsrsegrey, gtfx } = zowie;

export const pages = [
    {
        mousepad: "ninjafxhayate",
        name: ninjafxhayate.name,
        description: ninjafxhayate.description,
        image: ninjafxhayate.image,
        originalPrice: ninjafxhayate["original-price"],
        offertPrice: ninjafxhayate["offert-price"],
        brand: ninjafxhayate.brand,
        type: ninjafxhayate.type,
    },
    {
        mousepad: "ninjafxraiden",
        name: ninjafxraiden.name,
        description: ninjafxraiden.description,
        image: ninjafxraiden.image,
        originalPrice: ninjafxraiden["original-price"],
        offertPrice: ninjafxraiden["offert-price"],
        brand: ninjafxraiden.brand,
        type: ninjafxraiden.type,
    },
    {
        mousepad: "ninjafxzero",
        name: ninjafxzero.name,
        description: ninjafxzero.description,
        image: ninjafxzero.image,
        originalPrice: ninjafxzero["original-price"],
        offertPrice: ninjafxzero["offert-price"],
        brand: ninjafxzero.brand,
        type: ninjafxzero.type,
    },
    {
        mousepad: "gsrse",
        name: gsrse.name,
        description: gsrse.description,
        image: gsrse.image,
        originalPrice: gsrse["original-price"],
        offertPrice: gsrse["offert-price"],
        brand: gsrse.brand,
        type: gsrse.type,
    },
    {
        mousepad: "gsrsegrey",
        name: gsrsegrey.name,
        description: gsrsegrey.description,
        image: gsrsegrey.image,
        originalPrice: gsrsegrey["original-price"],
        offertPrice: gsrsegrey["offert-price"],
        brand: gsrsegrey.brand,
        type: gsrsegrey.type,
    },
    {
        mousepad: "gtfx",
        name: gtfx.name,
        description: gtfx.description,
        image: gtfx.image,
        originalPrice: gtfx["original-price"],
        offertPrice: gtfx["offer-price"],
        brand: gtfx.brand,
        type: gtfx.type,
    }
];