# Website (Notes for deployment)
## Tools used
* wrangler (dep - npx)
* VS-Code
* Brower
* Python

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
