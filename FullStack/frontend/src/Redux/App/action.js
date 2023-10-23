import * as types from "./actionTypes";
import axios from 'axios'
const apikey=process.env.api_key;
const post = (payload) => (dispatch) => {
  dispatch({ type: types.POST_REQ });
  return axios
    .post(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apikey}`, payload)
    .then((r) => {
      dispatch({ type: types.POST_SUC, payload: r.data });
    })
    .catch((e) => dispatch({ type: types.POST_FAIL, payload: e }));
};

const getPost=()=>(dispatch)=>{
  dispatch({type:types.GET_POST_REQ})
  return axios
  .get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apikey}`)
  .then((r)=>{
    dispatch({type:types.GET_POST_SUC,payload:r.data})
  })
  .catch((err)=>{
    dispatch({type:types.GET_POST_FAIL,payload:err})
  })
}


export {post,getPost};