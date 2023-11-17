// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req, res) => {
    const response = await fetch(
        `https://pinned.thrzl.xyz/hellofaizan`
    ).then((res) => res.json());

    res.status(200).json(response);
}

export default handler
