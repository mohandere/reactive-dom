import { el, mount } from "redom";

const parentNode = document.getElementById("root");

const hello = el("h1", "Hello world!");

mount(parentNode, hello);
