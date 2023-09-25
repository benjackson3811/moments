import { rest } from "msw"

const baseURL = "https://project-drf-api-5febd367257d.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req,res,ctx) => {
        return res(ctx.json({
            pk: 2,
            username: "Ben",
            email: "",
            first_name: "",
            last_name: "",
            profile_id: 2,
            profile_image: "https://res.cloudinary.com/ddswr99lk/image/upload/v1/media/../default_profile_a8xori"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/user/`, (req,res,ctx) => {
        return res(ctx.status(200))
    })
];