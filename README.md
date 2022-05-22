# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Prerequisites](#prerequisites)
    - [.NET 6.0](#net-60)
    - [Visual Studio 2022 Preview](#visual-studio-2022-preview)
    - [Mobile Development with .NET Workload](#mobile-development-with-net-workload)
  - [Demos](#demos)
    - [Create a Blazor Server Application](#create-a-blazor-server-application)
    - [Integrate TypeScript in Blazor](#integrate-typescript-in-blazor)
  - [Conclusion](#conclusion)
  - [Complete Code](#complete-code)
  - [Resources](#resources)

## Introduction

## Prerequisites

The following prerequisites are needed for this demo.

### .NET 6.0

Download the latest version of the .NET 6.0 SDK [here](https://dotnet.microsoft.com/en-us/download).

### Visual Studio 2022 Preview

For this demo, we are going to use the latest version of [Visual Studio 2022 Preview](https://visualstudio.microsoft.com/vs/community/).

### Mobile Development with .NET Workload

In order to build Blazor apps, the ASP.NET and web development workload needs to be installed, so if you do not have that installed let's do that now.

![ASP.NET and web development](images/34640f10f2d813f245973ddb81ffa401c7366e96e625b3e59c7c51a78bbb2056.png)  

## Demos

In the following demo we will create a Blazor application and I will show you how to use TypeScript in it.

### Create a Blazor Server Application

The first step, as usual, is to create our demo application. In this occasion, let's use the `dotnet` CLI to create our app, and then we will move to Visual Studio for code editing.

Make sure the .NET 6.0 SDK got installed correctly by typing `dotnet --info` in `Command Prompt` or `PowerShell`.

```dotnetcli
dotnet --info
.NET SDK (reflecting any global.json):
 Version:   6.0.300
 Commit:    8473146e7d

Runtime Environment:
 OS Name:     Windows
 OS Version:  10.0.22000
 OS Platform: Windows
 RID:         win10-x64
 Base Path:   C:\Program Files\dotnet\sdk\6.0.300\

Host (useful for support):
  Version: 7.0.0-preview.3.22175.4
  Commit:  162f83657c

.NET SDKs installed:
  3.1.419 [C:\Program Files\dotnet\sdk]
  5.0.400 [C:\Program Files\dotnet\sdk]
  5.0.406 [C:\Program Files\dotnet\sdk]
  5.0.408 [C:\Program Files\dotnet\sdk]
  6.0.100 [C:\Program Files\dotnet\sdk]
  6.0.105 [C:\Program Files\dotnet\sdk]
  6.0.201 [C:\Program Files\dotnet\sdk]
  6.0.202 [C:\Program Files\dotnet\sdk]
  6.0.203 [C:\Program Files\dotnet\sdk]
  6.0.300 [C:\Program Files\dotnet\sdk]
```

:point_up: The output above is truncated to make it shorter.

:blue_book: If you already had the `Command Prompt` open when you installed the .NET 6 SDK, the `dotnet` command is not going to be recognized, as `Command Prompt` caches environment variables on load. Restarting the `Command Prompt` will fix the issue.

Once we verified `dotnet` is installed correctly, let's use it to create a Blazor application by running `dotnet new`. Now, I do not know about you, but I never remember all the names of the different templates to create apps via the CLI, so let's start by listing all the templates running first `dotnet new --list`. This is the result:

```dotnetcli
dotnet new --list
These templates matched your input:

Template Name                Short Name           Language    Tags
---------------------------  -------------------  ----------  ---------------------------------------------------------
.NET MAUI App (Preview)      maui                 [C#]        MAUI/Android/iOS/macOS/Mac Catalyst/Windows/Tizen
.NET MAUI Blazor App (Pr...  maui-blazor          [C#]        MAUI/Android/iOS/macOS/Mac Catalyst/WinUI/Tizen/Blazor
.NET MAUI Class Library ...  mauilib              [C#]        MAUI/Android/iOS/macOS/Mac Catalyst/Windows/Tizen
.NET MAUI ContentPage (C...  maui-page-csharp     [C#]        MAUI/Android/iOS/macOS/Mac Catalyst/WinUI/Tizen/Xaml/Code
.NET MAUI ContentPage (X...  maui-page-xaml       [C#]        MAUI/Android/iOS/macOS/Mac Catalyst/WinUI/Tizen/Xaml/Code
.NET MAUI ContentView (C...  maui-view-csharp     [C#]        MAUI/Android/iOS/macOS/Mac Catalyst/WinUI/Tizen/Xaml/Code
.NET MAUI ContentView (X...  maui-view-xaml       [C#]        MAUI/Android/iOS/macOS/Mac Catalyst/WinUI/Tizen/Xaml/Code
.NET MAUI ResourceDictio...  maui-dict-xaml       [C#]        MAUI/Android/iOS/macOS/Mac Catalyst/WinUI/Xaml/Code
Android Activity template    android-activity     [C#]        Android/Mobile
Android Application (Pre...  android              [C#]        Android/Mobile
Android Class Library (P...  androidlib           [C#]        Android/Mobile
Android Java Library Bin...  android-bindinglib   [C#]        Android/Mobile
Android Layout template      android-layout       [C#]        Android/Mobile
ASP.NET Core Empty           web                  [C#],F#     Web/Empty
ASP.NET Core gRPC Service    grpc                 [C#]        Web/gRPC
ASP.NET Core Web API         webapi               [C#],F#     Web/WebAPI
ASP.NET Core Web App         webapp,razor         [C#]        Web/MVC/Razor Pages
ASP.NET Core Web App (Mo...  mvc                  [C#],F#     Web/MVC
ASP.NET Core with Angular    angular              [C#]        Web/MVC/SPA
ASP.NET Core with React.js   react                [C#]        Web/MVC/SPA
ASP.NET Core with React....  reactredux           [C#]        Web/MVC/SPA
Blazor Server App            blazorserver         [C#]        Web/Blazor
Blazor WebAssembly App       blazorwasm           [C#]        Web/Blazor/WebAssembly/PWA
Class Library                classlib             [C#],F#,VB  Common/Library
Console App                  console              [C#],F#,VB  Common/Console
dotnet gitignore file        gitignore                        Config
Dotnet local tool manife...  tool-manifest                    Config
EditorConfig file            editorconfig                     Config
global.json file             globaljson                       Config
iOS Application (Preview)    ios                  [C#]        iOS/Mobile
iOS Binding Library (Pre...  iosbinding           [C#]        iOS/Mobile
iOS Class Library (Preview)  ioslib               [C#]        iOS/Mobile
iOS Controller template ...  ios-controller       [C#]        iOS/Mobile
iOS Tabbed Application (...  ios-tabbed           [C#]        iOS/Mobile
MacCatalyst Application ...  maccatalyst          [C#]        macOS/Mac Catalyst
MacCatalyst Binding Libr...  maccatalystbinding   [C#]        macOS/Mac Catalyst
MSTest Test Project          mstest               [C#],F#,VB  Test/MSTest
MVC ViewImports              viewimports          [C#]        Web/ASP.NET
MVC ViewStart                viewstart            [C#]        Web/ASP.NET
NuGet Config                 nugetconfig                      Config
NUnit 3 Test Item            nunit-test           [C#],F#,VB  Test/NUnit
NUnit 3 Test Project         nunit                [C#],F#,VB  Test/NUnit
Protocol Buffer File         proto                            Web/gRPC
Razor Class Library          razorclasslib        [C#]        Web/Razor/Library/Razor Class Library
Razor Component              razorcomponent       [C#]        Web/ASP.NET
Razor Page                   page                 [C#]        Web/ASP.NET
Solution File                sln                              Solution
Web Config                   webconfig                        Config
Windows Forms App            winforms             [C#],VB     Common/WinForms
Windows Forms Class Library  winformslib          [C#],VB     Common/WinForms
Windows Forms Control Li...  winformscontrollib   [C#],VB     Common/WinForms
Worker Service               worker               [C#],F#     Common/Worker/Web
WPF Application              wpf                  [C#],VB     Common/WPF
WPF Class library            wpflib               [C#],VB     Common/WPF
WPF Custom Control Library   wpfcustomcontrollib  [C#],VB     Common/WPF
WPF User Control Library     wpfusercontrollib    [C#],VB     Common/WPF
xUnit Test Project           xunit                [C#],F#,VB  Test/xUnit
```

You can also go to the [.NET default templates for dotnet new](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new-sdk-templates) page for the official documentation.

From the list, we gathered that we can use the template's short name `blazorserver` for a Blazor Server App, or `blazorwasm` for a Blazor WebAssembly App, so let's use that to build a Blazor Server app, with the following command:

```dotnetcli
dotnet new blazorserver -o TypeScriptInBlazor --no-https -f net6.0
```

The results are

```dotnetcli
The template "Blazor Server App" was created successfully.
This template contains technologies from parties other than Microsoft, see https://aka.ms/aspnetcore/6.0-third-party-notices for details.

Processing post-creation actions...
Running 'dotnet restore' on Y:\TypeScriptInBlazor\TypeScriptInBlazor\TypeScriptInBlazor.csproj...
  Determining projects to restore...
  Restored Y:\TypeScriptInBlazor\TypeScriptInBlazor\TypeScriptInBlazor.csproj (in 58 ms).
Restore succeeded.
```

So let's restore dependencies now, but "CD'ing" into the TypeScriptInBlazor directory and run `dotnet restore`

```dotnetcli
 cd TypeScriptInBlazor
 dotnet restore
 Determining projects to restore...
  All projects are up-to-date for restore.
```

Now let's verify the app builds and run by executing `dotnet watch`, which not only builds and start the app, but also enables Hot Reload, to update the app whenever you make code changes.

```dotnetcli
dotnet watch
dotnet watch 🔥 Hot reload enabled. For a list of supported edits, see https://aka.ms/dotnet/hot-reload.
  💡 Press "Ctrl + R" to restart.
dotnet watch 🔧 Building...
  Determining projects to restore...
  All projects are up-to-date for restore.
  TypeScriptInBlazor -> Y:\TypeScriptInBlazor\TypeScriptInBlazor\bin\Debug\net6.0\TypeScriptInBlazor.dll
dotnet watch 🚀 Started
info: Microsoft.Hosting.Lifetime[14]
      Now listening on: http://localhost:5265
info: Microsoft.Hosting.Lifetime[0]
      Application started. Press Ctrl+C to shut down.
info: Microsoft.Hosting.Lifetime[0]
      Hosting environment: Development
info: Microsoft.Hosting.Lifetime[0]
      Content root path: Y:\TypeScriptInBlazor\TypeScriptInBlazor\
```

The application should open on your default browser after.

![Blazor App](images/a983df250e67e0879405c79ef24de82b9396036787e6e1233ca61e9542ce6904.png)  

### Integrate TypeScript in Blazor

In order to integrate TypeScript in our Blazor app, we need to install a `NuGet` package called `Create a Blazor Application`, by first typing `Control+C` to stop the running app, and using `dotnet add package` to install the package.

```dotnetcli
Control+C
Application is shutting down...
Shutdown requested. Press Ctrl+C again to force exit.

dotnet add package Microsoft.TypeScript.MSBuild
  Determining projects to restore...
  Writing C:\Users\carl\AppData\Local\Temp\tmpBFDE.tmp
info : Adding PackageReference for package 'Microsoft.TypeScript.MSBuild' into project 'Y:\TypeScriptInBlazor\TypeScriptInBlazor\TypeScriptInBlazor.csproj'.
info :   CACHE https://api.nuget.org/v3/registration5-gz-semver2/microsoft.typescript.msbuild/index.json
info : Restoring packages for Y:\TypeScriptInBlazor\TypeScriptInBlazor\TypeScriptInBlazor.csproj...
info :   GET https://api.nuget.org/v3-flatcontainer/microsoft.typescript.msbuild/index.json
info :   OK https://api.nuget.org/v3-flatcontainer/microsoft.typescript.msbuild/index.json 180ms
info :   GET https://api.nuget.org/v3-flatcontainer/microsoft.typescript.msbuild/4.6.4/microsoft.typescript.msbuild.4.6.4.nupkg
info :   OK https://api.nuget.org/v3-flatcontainer/microsoft.typescript.msbuild/4.6.4/microsoft.typescript.msbuild.4.6.4.nupkg 287ms
info : Installed Microsoft.TypeScript.MSBuild 4.6.4 from https://api.nuget.org/v3/index.json with content hash G6cBFIGapWt85/Zi17GL2PBboy/6Xt2vZNmZj0xHXuKHbqbULKKvClHyiIfzAFCN10QqgVt0e9fxwC/1A1CcAA==.
info : Package 'Microsoft.TypeScript.MSBuild' is compatible with all the specified frameworks in project 'Y:\TypeScriptInBlazor\TypeScriptInBlazor\TypeScriptInBlazor.csproj'.
info : PackageReference for package 'Microsoft.TypeScript.MSBuild' version '4.6.4' added to file 'Y:\TypeScriptInBlazor\TypeScriptInBlazor\TypeScriptInBlazor.csproj'.
info : Generating MSBuild file Y:\TypeScriptInBlazor\TypeScriptInBlazor\obj\TypeScriptInBlazor.csproj.nuget.g.props.
info : Generating MSBuild file Y:\TypeScriptInBlazor\TypeScriptInBlazor\obj\TypeScriptInBlazor.csproj.nuget.g.targets.
info : Writing assets file to disk. Path: Y:\TypeScriptInBlazor\TypeScriptInBlazor\obj\project.assets.json
log  : Restored Y:\TypeScriptInBlazor\TypeScriptInBlazor\TypeScriptInBlazor.csproj (in 2.03 sec).
```

## Conclusion

## Complete Code

The complete code for this demo can be found in the link below.

- <https://github.com/payini/TypeScriptInBlazor>

## Resources

| Resource Title                        | Url                                                                         |
| ------------------------------------- | --------------------------------------------------------------------------- |
| The .NET Show with Carl Franklin      | <https://www.youtube.com/playlist?list=PL8h4jt35t1wgW_PqzZ9USrHvvnk8JMQy_>  |
| Download .NET                         | <https://dotnet.microsoft.com/en-us/download>                               |
| .NET default templates for dotnet new | https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new-sdk-templates |