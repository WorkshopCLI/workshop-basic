# WORKSHOP BASIC

A basic Shopify workflow. This is a completely blank theme that gives you a blank canvas to start from. Gone are the days where you have to work around all of the existing templates, sections, settings, etc. Start from the ground up with these theme files.

## Install

- Clone the repo: `git clone https://github.com/WorkshopCLI/workshop-basic.git`
- Change directory into the repo: `cd workshop-basic`
- Delete the remote: `git remote rm origin` (this prevents your local from trying to pull/push from the Workshop Basic repository)
- Run `yarn install` to install dependencies

## Setup Env

- Copy setup.config.yml into a new file called config.yml `cp ./setup.config.yml ./config.yml`
- Update settings based on [Shopify's Theme Kit documentation](https://shopify.github.io/themekit/commands/#configure) 
- You'll need a "development" namespace for the next step

## Create New Theme on Storefront

- Run `yarn new` to create a new theme. The default name is Basic Theme, but you can pass a custom name to this command like `yarn new custom-theme-name`. If you want spaces in your theme name use quotes `yarn new "Custom Theme"`

## Development Commands
- `yarn deploy`: To deploy all files to your theme
- `yarn watch`: To watch changes and deploy files as they're changed
- `yarn open`: Open your theme in a browser tab
