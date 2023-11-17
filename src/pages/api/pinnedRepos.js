// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req, res) => {
    const response = await fetch(
        `https://gh-pinned-repos-api.ysnirix.xyz/api/get/?username=hellofaizan`
    ).then((res) => res.json());

    res.status(200).json(response);
}

export default handler
