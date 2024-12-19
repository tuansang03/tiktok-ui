// import * as httpRequest from '~/utils/httpRequest';

// export const getFollowings = async ({ page }) => {
//     try {
//         const token =
//             'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aWt0b2suZnVsbHN0YWNrLmVkdS52blwvYXBpXC9hdXRoXC9yZWdpc3RlciIsImlhdCI6MTczMzg0ODc0NywiZXhwIjoxNzM2NDQwNzQ3LCJuYmYiOjE3MzM4NDg3NDcsImp0aSI6IldWMldsWE5vcmdBalJQbzAiLCJzdWIiOjcwNjcsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.q8oC7lyfsKvnzw3GgmNH4K4o7XMRb4ZScUUJy22pk1Q';

//         const res = await httpRequest.get('me/followings', {
//             params: {
//                 page,
//             },
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return res.data;
//     } catch (error) {
//         console.log(error);
//     }
// };
