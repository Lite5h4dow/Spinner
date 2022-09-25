# Spinner
Spinner is a selfhosted Docker management system designed with Oneshot docker runs in mind.

## Goals
[ ] Host Management (Remote and Local)

[ ] Deploy Compose stacks (With Docker Compose)

[ ] Deploy Oneshots (Automatic media mounting and output providing (AI injest and export))

[ ] Deploy Via Request

## Project Details
current plan is to build this as a normal Next JS project for now and migrate the project to React Server Components and Next Server Streaming once it leaves alpha and becomes more stable. It might be possible to move this on to BunJS once that is also more compatible with more of NextJS' features.

## Project Aim
making an open source self run cloud service management platform that allows people to deploy to their own machines with the ease of something like GCP / AWS on their own hardware using the power of docker (and maybe kubernetes if I learn it 😀)

## How to get it 
### Docker
the image is available on my repository.
https://registry.litelot.us/spinner
Right now, the image relies on a [surrealdb](https://surrealdb.com/install) instance for it to store your hosts. Add it to your compose or spin it up with the docker command and take it from there with spinner.

Spinner is currently in alpha and only has a "latest" tag. Until the code is stable, it will only build a latest. I'll let you know when we have versions.

### Local
if you want to run it locally you can. Clone the repository and build then start. e.g.
`{yarn, npm, pnpm} build && {yarn, npm, pnpm} start`

