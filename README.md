# Next-Docker-Traefik

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). This also has support for [docker-compose](https://docs.docker.com/compose/) and [Traefik](https://doc.traefik.io/traefik/).

## Setup

After cloning this repo, there is only one file you need to change, `.env`. There are two environment variables, SERVICE_NAME and ENTRYPOINT_NAME. The SERVICE_NAME is the name of the app you are building, or just a simple name for it. The ENTRYPOINT_NAME is the name of the entrypoint you have configured in Traefik.
