![pipedream](https://i.ibb.co/hB42XLK/github2.png)

<p align="center">
  <img src="https://img.shields.io/badge/-Join%20us%20on%20Slack-green?logo=slack&logoColor=34d28B&labelColor=150d11&color=34d28B&logoWidth=18&link=https%3A%2F%2Fpipedream.com%2Fcommunity&link=https%3A%2F%2Fpipedream.com%2Fcommunity)](https://pipedream.com/community">
  <img src="https://img.shields.io/twitter/follow/pipedream?label=Follow%20%40pipedream&style=social">
</p>

# Process events from Pipedream SSE streams in Node.js

## Prerequisites

- [Install the `pd` CLI](https://docs.pipedream.com/cli/install/)
- [Sign up for a Pipedream account](https://docs.pipedream.com/cli/login/#signing-up-for-pipedream-via-the-cli)
- [Create your first event source](https://github.com/PipedreamHQ/pipedream/blob/master/apps/http/README.md#quickstart)

## Quickstart

Clone this repo, `cd` into the cloned directory, and run

```bash
npm i
```

Then rename the `.env.example` file:

```bash
mv .example.env .env
```

This file contains placeholders for your Pipedream API key and SSE URL for your source. You can find your API key in your [Pipedream Account Settings](https://pipedream.com/settings/account), and get your SSE URL by running `pd list streams` and copying the URL under the **SSE** section. Add both to the `.env` file:

```text
PD_API_KEY=abc123
SSE_URL=https://rt.pipedream.com/sse/dc/dc_abc123/emits
```

Finally, run

```bash
node index.js
```

You'll see a confirmation that you're connected to the right URL, then the script will wait for you to send new events to your source:

```text
λ ~/pipedream/node-sse-example/ master* node index.js
Connected to https://rt.pipedream.com/sse/dc/dc_rmXuqV/emits. Listening for new events...

```

In another shell, trigger a new event in your source (for example, send an HTTP request to its endpoint — run `pd describe <source>` to get its endpoint URL), and the script should print it.

## Modify the code to process the event in a custom way.

This code in `index.js` processes the event:


```javascript
es.onmessage = event => {
  console.log(event.data);
};
```

Just modify this function to parse and process the event in whatever way you'd like.

## Questions?

Feel free to [reach out to the Pipedream team](https://docs.pipedream.com/support/) or raise an issue in this repo with any questions.
