# scrapbook-starter
This is a starter for [gatsbyjs](https://www.gatsbyjs.com/) for building a scrapbook.

## pre-requisits
In order to use this starter you must have [gastsby cli installed](https://www.gatsbyjs.com/docs/tutorial/part-zero/).

```sh
npm install -g gatsby-cli
```

## Creating the site
Once you have the CLI installed you can create the site using this starter.


```sh
gatsby new my-scrapbook https://github.com/JeffreyRiggle/scrapbook-starter
```

## Start developing
Navigate to the site directory and start it up.

```sh
cd my-scrapbook
gatsby develop
```

### Adding images
All images in the scrapbook are comprised of a image in `src/img` and a metadata file in `src/data`. File names do not have to match but to keep it easy the starter uses `1.jpg` and `1.json`.

### Metadata file
The meta data file controls what is displayed with the image and in what order the images are displayed.

```json
{
    "description": "Some basic image", // Text that appears under the image.
    "tags": [
        "Test",
        "tags"
    ], // Any additional search terms
    "image": "1.jpg", // The image to show.
    "date": "1609678772341" // The date the image was created a number see date (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)
}
```