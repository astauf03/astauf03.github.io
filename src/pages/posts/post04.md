---
layout: ../../layouts/MarkdownPostLayout.astro
title: Predicting Drunk Driving Crashes in Philadelphia
author: Alex Stauffer, Jun Luu, Tessa Vu
description: "Logistic Regression Analysis"
image:
    src: /images/projects/pexels-muhammed-hanefi.jpg
    alt: "White car zooming off amongst blurry background."
pubDate: Fall 2025
tags: ["data analysis", "musa 5000 statistical and data mining methods"]
---
## Project Summary

This project uses logistic regression to explore traffic crash data from Philadelphia covering 2008 through 2012 to investigate the relationship between various crash characteristics, driver behaviors, and 
neighborhood-level factors with the likelihood of alcohol involvement. 

The predictors in our model included:
- **FATAL_OR_M**: whether the crash resulted in a fatality or major injury 
- **OVERTURNED**: whether the crash involved an overturned vehicle 
- **CELL_PHONE**: whether the driver was using a cell phone 
- **SPEEDING**: whether the crash involved speeding 
- **AGGRESSIVE**: whether the crash involved aggressive driving 
- **DRIVER1617**: whether at least one driver was aged 16-17 
- **DRIVER65PLUS**: whether at least one driver was aged 65 or older 
- **PCTBACHMOR**: percentage of residents with a bachelor's degree or higher in the crash 
location's census block group 
- **MEDHHINC**: median household income in the crash location's census block group

## Outcomes

Crashes involving **SPEEDING** are 4.66 times more likely to involve drunk driving, and our most strongest predictor. Crashes involving **OVERTURNED** vehicles are 2.53 times more likely to be associated with drunk driving. We found that **CELL_PHONE** and **PCTBACHMOR** were not associated with drunk driving incidents, as their p-values were p = 0.88 and p = 0.77 respectively.

### Outputs

1. **Markdown**: [Read our code here](https://astauf03.github.io/spatial-statistics/HW3_Logistic_Regression/logistic_regression.html)

2. **Paper**: [View Final Report](https://drive.google.com/file/d/1Mov32VDVUMSXqBWkCeWEBDAC95YO57rA/view?usp=sharing)