<!--
title: 'Atos users API'
description: 'This is atos users API. Development is on the way.'
layout: Doc
framework: v1
platform: AWS
language: NodeJS / Typescript
priority: 10
authorLink: 'https://github.com/dribeiroferr'
authorName: 'Davi Ferreira'
authorAvatar: 'https://avatars.githubusercontent.com/u/58926809?s=400&u=6ecb97bb5c56ab990060617058828355e4e9fed9&v=4'
-->
# Atos Users API 🌐

![Project Banner](path_to_your_image.png) 

> A modern Account manager API built with Typescript, NodeJs, and PostgreSQL. 🚀

---
## 📚 Table of Contents

- [Atos Users API 🌐](#atos-users-api-)
  - [📚 Table of Contents](#-table-of-contents)
  - [🌟 Features](#-features)
  - [🛠 Installation](#-installation)
  - [🚀 Usage](#-usage)
  - [📂 Project Structure](#-project-structure)
  - [🧪 Testing](#-testing)
  - [🤝 Contributing](#-contributing)
- [🌳 Git Flow](#-git-flow)
  - [Main Branches](#main-branches)
    - [1. Main](#1-main)
    - [2. Develop](#2-develop)
  - [Supporting Branches](#supporting-branches)
    - [1. Feature Branches](#1-feature-branches)
    - [2. Release Branches](#2-release-branches)
    - [3. Hotfix Branches](#3-hotfix-branches)
  - [Workflow](#workflow)
    - [1. Feature Development](#1-feature-development)
    - [2. Release Preparation](#2-release-preparation)
    - [3. Hotfixes](#3-hotfixes)
  - [Best Practices](#best-practices)
  - [📜 License](#-license)
  - [📞 Contact](#-contact)

---

## 🌟 Features

- **FastAPI Integration**: Harness the power and speed of FastAPI.
- **Kong API Gateway**: Robust management of incoming API requests.
- **SQL Server Backend**: Reliable and scalable database solution.
- **Modern Logging**: Comprehensive logging for requests and responses.
- **Hexagonal Architecture**: Maintainability and scalability at its core.

---

## 🛠 Installation

1. **Clone the repository**:

   ```
   git clone https://github.com/your_username/atos-users-api
   ```
2. **Navigate to the project directory**:
   ```
   cd apigateway
   ```
3. **Set up the environment**:
   ```
   cp src/.env.example src/.env
   ```
   Modify the '.env' file with your settings
4. **Run with Docker Compoose**:
   ```
   docker-compose up -d
   ``` 
---

## 🚀 Usage

1. **Access the API**:
   Open your browser or API client and navigate to:**"http://localhost:9001"**
2. **API Endpoints**:
   - Save Request:<br>
   - POST /v1/gateway/save/request_response   
---

## 📂 Project Structure

```
atos-users-api/
│
├── .git/                           # Git version control folder
├── .pytest_cache/                  # Temporary cache for pytest
├── etc/                            # Configuration and setup files
│   ├── database/                   
│   │   ├── sqlServer/              # SQL Server setup files
│   │   │   └── Dockerfile          
│   │   ├── kong/                   # Kong API Gateway setup files
│   │       └── Dockerfile          
│   └── ...                         # Other configuration files
│
├── src/                            # Source code
│   ├── gateway/
│   │   ├── domain/                 # Domain logic
│   │   │   ├── logging/            # Logging related files
│   │   │   ├── request/            # Request related files
│   │   │   └── response/           # Response related files
│   │   ├── application/            # Application services
│   │   │   └── requestResponse/    # Request-Response service
│   │   ├── infrastructure/         # Infrastructure related files
│   │   │   ├── database/           # Database related files
│   │   │   ├── logging/            # Logging infrastructure
│   │   │   └── middleware/         # Middleware related files
│   │   └── main.py                 # Main application entry point
│   └── ...                         # Other source files
│
├── scripts/                        # Utility scripts
│   ├── register_fastapi.sh
│   ├── add_plugins.sh
│   └── ...
│
├── tests/                          # Test files
│   ├── domain/                     # Domain logic tests
│   ├── application/                # Application services tests
│   ├── infrastructure/             # Infrastructure tests
│   └── ...
│
├── docker-compose.yml              # Docker Compose configuration
└── README.md                       # Project documentation
```
---
## 🧪 Testing

To run the tests, execute the following command:
```
yarn test
```
---
## 🤝 Contributing

We welcome contributions from the community! Whether it's bug reports, feature requests, or code contributions, your input is valuable. For guidelines on how to contribute, please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file.

---

# 🌳 Git Flow

Git Flow is a branching model for Git that provides a structured workflow for managing and versioning software development projects. It ensures a clean and well-defined history and is particularly useful for projects with multiple developers working in parallel.

## Main Branches

### 1. Main
- Represents the official release history.
- Every commit in the master branch is a production-ready state.

### 2. Develop
- Contains the latest delivered development changes for the next release.
- This is the main branch where feature branches merge.

## Supporting Branches

### 1. Feature Branches
- **Branch off from**: `develop`
- **Merge back into**: `develop`
- **Naming convention**: `feature/${card_number}`

### 2. Release Branches
- **Branch off from**: `develop`
- **Merge back into**: `develop` and `master`
- **Naming convention**: `release/*`

### 3. Hotfix Branches
- **Branch off from**: `main`
- **Merge back into**: `develop` and `master`
- **Naming convention**: `hotfix/${card_number}`

## Workflow

### 1. Feature Development
- Create a new branch from `develop` (e.g., `feature/${card_number}`).
- Implement the feature and commit changes.
- Once the feature is complete, merge it back into `develop`.

### 2. Release Preparation
- When `develop` is stable, branch off to a release branch (e.g., `release/1.0.0`).
- This branch is for final polishing and bug fixing.
- When it's stable, merge it into `main` (and tag the release) and also back into `develop`.

### 3. Hotfixes
- For critical bugs in a production version, branch off a hotfix branch from `main`.
- Fix the bug and merge the hotfix branch back into both `main` (and tag it) and `develop`.

## Best Practices

- **Commit Regularly**: Ensure a fine-grained history of changes.
- **Pull Before Pushing**: Always pull the latest changes from the remote before pushing to avoid conflicts.
- **Use Descriptive Commit Messages**: Helps other team members understand the context of changes.
- **Delete Feature Branches After Merging**: Keeps the repository clean.

By adhering to the Git Flow model, teams can ensure a structured and efficient workflow, especially in projects with multiple developers working concurrently.

## 📜 License

This project is under the MIT License. For more details, please check the [LICENSE](LICENSE) file.

---

## 📞 Contact

Got questions or feedback? Reach out!

- **Application Owner**: Davi Ferreira (Sr. Fullstack Engineer)
- **GitHub**: [@sigaodavi](https://github.com/sigaodavi)
- **Email**: davi.ferreira.terceirizado@sigaantenado.com.br

---

**Happy Coding!** 💜