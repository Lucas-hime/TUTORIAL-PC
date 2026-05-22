# Windows UI Automation Helper (.NET 8) real

Projeto real em `native/MelMinie.UIAHelper`.

## Build
`dotnet build native/MelMinie.UIAHelper/MelMinie.UIAHelper.csproj -c Release`

## Execução
Exemplo consulta janela ativa:
`dotnet run --project native/MelMinie.UIAHelper/MelMinie.UIAHelper.csproj -- '{"Mode":"activeWindow"}'`

Exemplo localizar elemento por nome:
`dotnet run --project native/MelMinie.UIAHelper/MelMinie.UIAHelper.csproj -- '{"Mode":"findElementByName","ElementName":"Arquivo"}'`
