@echo off
setlocal

set name=%*

echo Argument received: %name%

yarn typeorm migration:generate -n %name% --config ./src/utils/config/ormconfig.ts

endlocal