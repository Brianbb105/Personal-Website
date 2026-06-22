# Analytics Manual

This site uses two analytics layers:

- Vercel Analytics for privacy-friendly page analytics.
- Google Analytics 4 for the GA dashboard and richer blog engagement events.

## 1. Create The GA4 Web Stream

1. Open [Google Analytics](https://analytics.google.com/).
2. Create an Analytics account and GA4 property if you do not already have one.
3. Go to Admin, then Data streams.
4. Add a Web stream for the site domain.
5. Copy the Measurement ID. It starts with `G-`.

Google's setup guide is here: [Set up Analytics for a website and/or app](https://support.google.com/analytics/answer/9304153).

## 2. Add The Measurement ID

For local development, create `.env.local`:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

For Vercel:

1. Open the Vercel project.
2. Go to Settings, then Environment Variables.
3. Add `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
4. Paste your `G-` measurement ID as the value.
5. Select Production, Preview, and Development if you want GA4 active everywhere.
6. Redeploy the site.

The value is public because Google Analytics runs in the browser. Do not put private API keys in `NEXT_PUBLIC_` variables.

## 3. Keep Enhanced Measurement On

In GA4, open Admin, then Data streams, then your web stream. Keep Enhanced measurement enabled.

GA4 enhanced measurement automatically tracks:

- `page_view` when a page loads or browser history changes.
- `scroll` when a visitor reaches 90% page depth.
- `click` for outbound clicks.
- `user_engagement` when the page is focused for at least one second.

Google's enhanced measurement reference is here: [Enhanced measurement events](https://support.google.com/analytics/answer/9216061).

## 4. Blog Events This Site Sends

When `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set, blog detail pages also send custom GA4 events:

| Event | Meaning |
| --- | --- |
| `blog_read_start` | A blog post page was opened. |
| `blog_scroll_25` | Reader reached 25% of the blog content. |
| `blog_scroll_50` | Reader reached 50% of the blog content. |
| `blog_scroll_75` | Reader reached 75% of the blog content. |
| `blog_scroll_90` | Reader reached 90% of the blog content. |
| `blog_engaged_read` | Reader spent at least 20 visible seconds and reached at least 50% depth. |
| `blog_read_complete` | Reader reached at least 90% depth. |

Each custom event includes these parameters:

- `blog_slug`
- `blog_title`
- `blog_category`
- `scroll_depth` for scroll events
- `engaged_seconds` for engaged and complete reads
- `max_scroll_depth` for engaged and complete reads

## 5. Where To Read The Data

Use these GA4 views first:

- Reports, then Realtime: verify that data is arriving after deploy.
- Reports, then Engagement, then Pages and screens: see views, users, and engagement by page.
- Reports, then Engagement, then Events: see `blog_read_start`, scroll milestones, `blog_engaged_read`, and `blog_read_complete`.
- Explore, then Free form: build a table with page path, event name, event count, and users.

GA4 data collection may take up to 30 minutes to begin. Realtime is the fastest way to verify the tag.

## 6. Optional Custom Dimensions

GA4 records custom event parameters immediately, but for easier reporting you should register event-scoped custom dimensions for:

- `blog_slug`
- `blog_title`
- `blog_category`

Google's reference is here: [About custom dimensions and metrics](https://support.google.com/analytics/answer/14240153).

Avoid creating custom dimensions for unique users, timestamps, or other high-cardinality values.

## 7. Privacy Note

GA4 is a third-party tracker and Safari private browsing may block it. That is expected. Vercel Analytics can remain as the lightweight first-party baseline, while GA4 gives a richer dashboard for browsers that allow it.
