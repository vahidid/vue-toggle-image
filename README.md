## Intro

This package is a component for make a toggle or switch with any child element. You can use image for toggle buttons or icons.
The name is image because this component built for specify work with image element but you can use icon or div elemnts.

## Install

Install component with:

`npm install @ivahid/vue-toggle-image`

## Use

Import the component in your code like this:

```
import VueToggleImage from "@ivahid/vue-toggle-image";
```

And import in your component:

```
export default {
  name: "App",
  components: {
    VueToggleImage,
  },
  methods: {},
};
```

Use it in template:

```
<VueToggleImage @onChange="onChangeToggle">
    <img src="imageSrc" />
    <img src="imageSrc2" />
</VueToggleImage>
```

You can define a method for handle change toggle:

```
methods: {
    onChangeToggle(e) {
      console.log(e); // e is the index of child in template, e.g for first element is 0
    },
},
```

## Enjoy :)

If it has any issue i will be appreciate to you for report it :)
Thank you so much
