const { VITE_AWS_ACCESS_KEY_ID, VITE_SECRET_ACCESS_KEY } = import.meta.env

export const s3Config = {
  bucketName: 'iko-amazon-s3',
  dirName: 'review',
  region: 'ap-northeast-2',
  accessKeyId: VITE_AWS_ACCESS_KEY_ID,
  secretAccessKey: VITE_SECRET_ACCESS_KEY
}
