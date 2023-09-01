#!/bin/bash

migrationName=$1

yarn typeorm migration:generate -n $migrationName --config src/utils/config/ormconfig.ts