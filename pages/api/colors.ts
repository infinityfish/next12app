// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    res.status(200).json({
        "colors": [
        {
            "color": "black",
            "category": "hue",
            "type": "primary",
            "code": {
            "rgba": [255,255,255,1],
            "hex": "#000"
            }
        },
        {
            "color": "white",
            "category": "value",
            "code": {
            "rgba": [0,0,0,1],
            "hex": "#FFF"
            }
        },
        {
            "color": "red",
            "category": "hue",
            "type": "primary",
            "code": {
            "rgba": [255,0,0,1],
            "hex": "#FF0"
            }
        },
        {
            "color": "blue",
            "category": "hue",
            "type": "primary",
            "code": {
            "rgba": [0,0,255,1],
            "hex": "#00F"
            }
        },
        {
            "color": "yellow",
            "category": "hue",
            "type": "primary",
            "code": {
            "rgba": [255,255,0,1],
            "hex": "#FF0"
            }
        },
        {
            "color": "green",
            "category": "hue",
            "type": "secondary",
            "code": {
            "rgba": [0,255,0,1],
            "hex": "#0F0"
            }
        },
        ]
    })
}