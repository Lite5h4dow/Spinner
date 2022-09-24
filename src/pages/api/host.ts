import Docker from "dockerode"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async(req:NextApiRequest, res:NextApiResponse) => {
  const docker = new Docker({socketPath: "/var/run/docker.sock"})
  const data = await docker.info()

  res.status(200).json(data)
}

export default handler
