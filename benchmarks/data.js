window.BENCHMARK_DATA = {
  "lastUpdate": 1787786151802,
  "repoUrl": "https://github.com/Deskwise/archy",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "richardruiz@live.com",
            "name": "Richard Ruiz",
            "username": "richrz"
          },
          "committer": {
            "email": "richardruiz@live.com",
            "name": "Richard Ruiz",
            "username": "richrz"
          },
          "distinct": true,
          "id": "e76b85cfec24e60ced4d9974fff05916778a1a15",
          "message": "Initial commit to Archy repo",
          "timestamp": "2025-08-06T11:44:25-06:00",
          "tree_id": "afbae5680a4c00d5cb405f41699bfe9e07b7aa89",
          "url": "https://github.com/Deskwise/archy/commit/e76b85cfec24e60ced4d9974fff05916778a1a15"
        },
        "date": 1754502356040,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0195,
            "unit": "ms",
            "range": 0.2718,
            "extra": "51283 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1682,
            "unit": "ms",
            "range": 0.6984999999999997,
            "extra": "316 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0047,
            "unit": "ms",
            "range": 0.2801,
            "extra": "212513 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.066,
            "unit": "ms",
            "range": 0.3272,
            "extra": "15145 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Deskwise",
            "username": "Deskwise"
          },
          "committer": {
            "name": "Deskwise",
            "username": "Deskwise"
          },
          "id": "f93f4fd592f8e1a4dea452efece15f81eebbc060",
          "message": "chore: add Cloud Agent development environment config",
          "timestamp": "2025-08-06T17:44:36Z",
          "url": "https://github.com/Deskwise/archy/pull/1/commits/f93f4fd592f8e1a4dea452efece15f81eebbc060"
        },
        "date": 1787786151451,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0203,
            "range": "0.661",
            "unit": "ms",
            "extra": "49198 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.5666,
            "range": "5.2569",
            "unit": "ms",
            "extra": "280 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0053,
            "range": "0.34319999999999995",
            "unit": "ms",
            "extra": "188573 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0732,
            "range": "0.5033",
            "unit": "ms",
            "extra": "13655 ops/sec"
          }
        ]
      }
    ]
  }
}