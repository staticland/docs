# Creating a site

## With the command-line tool

### Install the `staticland` command-line tool via npm:

```
npm install -g staticland
```

### Create an index.html file with the content you want. Example:

```html
<h1>hi this is fun</h1>
```

### Make sure your domain is pointing to the StaticLand IP address: `52.39.104.182`.

**Important:** the IP address must be set up correctly for the certificate request process to work.

You'll create an A record for your domain in your registrar's DNS settings pointing to `52.39.104.182`.

### Create an account on StaticLand:

```sh
staticland register
```

### Deploy the site

```sh
staticland . yourcooldomain.com
```

## Other methods

We're tinkering with other methods of building and deploying sites.

