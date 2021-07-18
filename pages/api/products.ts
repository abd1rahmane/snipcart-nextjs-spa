// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {IProduct} from "../../components/Product";

import halfmoonBettaPicture from "../../public/halfmoon.jpg";
import dragonScaleBettaPicture from "../../public/dragonscale.jpg";
import crowntailBettaPicture from "../../public/crowntail.jpeg";
import veiltailBettaPicture from "../../public/veiltail.jpg";

interface IProductsResponse {
  products: IProduct[]
}

const data: IProduct[] = [
  {id: "nextjs_halfmoon", name: "Halfmoon Betta", price: 25.00, image: halfmoonBettaPicture, description: "The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees.", url:"test"},
  {id: "nextjs_dragonscale", name: "Dragon Scale Betta", price: 35, image: dragonScaleBettaPicture,description: "The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor.", url: "test"},
  {id: "nextjs_crowntail", name: "Crowntail Betta", price: 7.50, image: crowntailBettaPicture, description: "The crowntail is pretty common, but interesting none the less. It's recognized by the shape of its tail that has an appearance of a comb.", url:"test"},
  {id: "nextjs_veiltail", name: "Veiltail Betta", price: 5.00, image: veiltailBettaPicture, description: "By far the most common betta fish. You can recognize it by its long tail aiming downwards.", url: "test"}
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProductsResponse>
) {
  res.status(200).json({ products: data })
}
