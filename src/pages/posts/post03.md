---
layout: ../../layouts/MarkdownPostLayout.astro
title: Chicago Burglary & Pothole Analysis (2017-2018)
author: Astro Learner
description: "I had some challenges, but asking in the community really helped!"
image:
    src: /images/projects/temporal-error.png
    alt: "The Astro logo on a dark background with rainbow rays."
pubDate: Fall 2025
tags: ["data analysis", "neighborhoods", "public policy"]
---

## Project Summary

### This project evaluates whether 311 alley pothole complaints can improve burglary prediction in Chicago beyond baseline spatial models, testing the usefulness of non-crime civic data in predictive policing contexts.

The original goal of this assignment was to select a 311 complaint and correlate it against burglary prediction across Chicago. I tried selected potholes because sometimes pothole-related calls can signal specific neighborhood characteristics. 

Using a 500m x 500m fishnet grid, I implemented nearest-neighbor feature engineering to identify if pothole complaints influenced burglaries. 

## Outcomes

- Pothole complaints showed weak independent predictive power after controlling for socioeconomic variables.
- KDE baselines slightly outperformed regression models in raw predictive accuracy.
- Spatial generalization was moderate; temporal generalization was weaker

### Outputs

1. [Analytical Report](https://astauf03.github.io/spatial-analysis-portfolio/chicago_burglary_potholes/stauffer_alex.html)