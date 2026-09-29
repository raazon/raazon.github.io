---
title: "PR Review — AI Pull Request Reviewer for GitHub"
description: "Review GitHub pull requests with Claude, OpenAI, Gemini, and free-tier providers. Visitors paste a PR URL; the review runs on a Cloudflare Worker (diff fetch, prompt, model call), not in the browser. Optional GitHub sign-in for private repos and posting the review as a comment."
date: "Sep 09 2026"
category: "AI Web App"
author: "Razon Komar Pal"
stat: "7 AI Providers"
image: "/images/pr-review-banner.webp"
demoURL: "https://pr-review.razonkumar.workers.dev/"
---

PR Review is an AI-powered GitHub pull request reviewer built as a full web application rather than a browser-side script. Paste any public PR URL and pick from Claude, OpenAI, Gemini, and several free-tier providers to get a structured verdict you can copy or post back as a GitHub comment.

## How it works

The heavy lifting happens on a **Cloudflare Worker**, not in the visitor's browser:

1. The worker fetches the pull request diff from the GitHub API.
2. The diff is assembled into a structured review prompt.
3. The prompt is sent to the selected model provider.
4. The response is parsed into findings, severity, and a merge recommendation.

## Features

- ✅ Multiple AI providers behind one interface, including free tiers
- ✅ Diff fetching, prompting, and model calls handled server-side
- ✅ Structured output: findings, severity, and a safe-to-merge verdict
- ✅ Optional GitHub sign-in for reviewing private repositories
- ✅ Post the generated review back to GitHub as a PR comment
- ✅ Security and quality issue detection alongside general feedback
