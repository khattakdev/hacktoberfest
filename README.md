## Github Basics

This repository is your gate way to open source contribution. You can open a Pull request for by following the instructions.

### Fork

The very first thing is to fork this repository. You can't make direct changes to this repository until unless I give you permissions.

### Clone the repository

To clone this repository, execute the following line

```
https://github.com/{username}/github-basics.git
```

Make sure to replace the `username` with your GitHub Handle.

### Code Changes

Once you're done with the cloning, open the repository locally.Checkout to a new branch (`github checkout -b "aniq"`). Open `pages/contributors.json` file, which looks something like this:

```json
[
  {
    "id": "1",
    "name": "Aniq Javed",
    "title": "Software Engineer",
    "picture": "/faces/aniqjaved.jpg",
    "facebook": "https://www.facebook.com/aniqjaved/",
    "linkedin": "https://www.linkedin.com/in/aniq-javed/",
    "github": "https://github.com/aniqjaved",
    "twitter": "https://twitter.com/aniq_javed"
  }
]
```

Copy the following snippet and add your information to the end of the file.

```json
{
  "id": "",
  "name": "",
  "title": "",
  "picture": "",
  "facebook": "",
  "linkedin": "",
  "github": "",
  "twitter": ""
}
```

Also make sure to add your picture to `public/faces`

## Pull Request

Next is to push the code (replace `aniq` with the branch name)

```
git push origin aniq
```

Once you push the code, simple go to your remote repository and open a pull request.

## Show your support

Give a ⭐️ and follow [@aniqjaved](https://github.com/aniqjaved) if this project helped you!

That's it 🎉
