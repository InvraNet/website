# Website (Notes for deployment)
## Dependencies
* Node - NPX (for Wrangler.)
* Git

## Tools used
* wrangler
* Visual Studio Code
* Browser (e.g Firefox, Arc, Chrome)
* Python
* gh

## Deployment for Testing
``python3 -m http.server 80``

## Deployment instructions - Publishing after CC
``` sh 
git push -fv
```
Used to deploy to github. MAKE SURE TO COMMIT BEFOREHAND WITH WHAT YOU HAVE DONE. ``git commit [file] -m [message]``
```sh
clp-push
```
```sh
npx wrangler pages deploy ./ --branch=main
```
Either option can be picked, note for ``clp-push`` you need an alias setup for the second commmand. Use this command to push to cloudflare pages.
