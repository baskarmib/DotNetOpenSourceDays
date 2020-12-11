---
title: "How to fight data preparation debt with Jupyter Notebook and DataFrame using Microsoft ML.NET"
description: "Until recently ML.NET did not have a good REPL (read–eval–print–loop)"
date: 2020-12-18
---
### Audience Level

Intermediate

### Description

Until recently ML.NET did not have a good REPL (read–eval–print–loop) instrument to experience interactively with code and data, but now, .NET developers can run on-premise interactive machine learning scenarios with Jupyter Notebooks using C#, F#, or Powershell scripts in a web browser.

Similarly to technical debt, when it comes to data we can talk about data preparation debt. In order to reduce data preparation debt we need to find some answers:
- Is my data large enough?
- Is my data good enough?
- Is my data clean enough?
- Is my data biased?

ML.NET components like data loaders, estimators, trainers, transformers, or predictors are all working with DataView object. DataView is a lazy-loading object (like IEnumerable), therefore we have to call Fit method to bind it to data. In order to visualize and prepare the data, we need another object like DataFrame which is an in-memory collection of columns and rows, providing features similar to Pandas.

This talk will give you an overview of a variety of instruments like categorical and numerical distribution, box plot segmentation, correlation matrix, evaluation metrics, and confusion matrix, and more, which will help you to know if you have enough, good and unbiased data.

### Speaker Bio

Daniel Costea is Microsoft MVP on Developer Technologies.
Trainer. Developer. Speaker.
1200+ hrs of training on .NET web technologies for more than 700 students, delivered in the last 5 years.
Speaker on .NET technologies at 30+ IT conferences in Europe, and the USA, in the last 3 years.
A consequent fan of C# from the year 2001.
