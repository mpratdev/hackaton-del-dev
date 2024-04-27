import {
    viper
} from "../../../public/news/viper.json";
import {
    g920
} from "../../../public/news/g920.json";
import {
    openai
} from "../../../public/news/openai.json";

export const pages = [
    {
        name: "viper",
        href: "/news/viper",
        title: viper.title,
        description: viper.description,
        author: viper.author,
        category: viper.category,
        publication_date: viper.publication_date,
        source: viper.source,
        paragraphs: viper.paragraphs,
        image: viper.image
    },
    {
        name: "g920",
        href: "/news/g920",
        title: g920.title,
        description: g920.description,
        author: g920.author,
        category: g920.category,
        publication_date: g920.publication_date,
        source: g920.source,
        paragraphs: g920.paragraphs,
        image: g920.image
    },
    {
        name: "openai",
        href: "/news/openai",
        title: openai.title,
        description: openai.description,
        author: openai.author,
        category: openai.category,
        publication_date: openai.publication_date,
        source: openai.source,
        paragraphs: openai.paragraphs,
        image: openai.image
    }
];