import { dirtImg, grassImg, glassImg, woodImg, logImg, faceImg, face2Img, face3Img } from "./images";
import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

const dirtTexture = new TextureLoader().load(dirtImg);
const logTexture = new TextureLoader().load(logImg);
const grassTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);
const groundTexture = new TextureLoader().load(grassImg);
const faceTexture = new TextureLoader().load(faceImg);
const face2Texture = new TextureLoader().load(face2Img);
const face3Texture = new TextureLoader().load(face3Img);

dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
faceTexture.magFilter = NearestFilter;
face2Texture.magFilter = NearestFilter;
face3Texture.magFilter = NearestFilter;
groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

export {
  dirtTexture,
  logTexture,
  grassTexture,
  glassTexture,
  woodTexture,
  groundTexture,
  faceTexture,
  face2Texture,
  face3Texture,
};
