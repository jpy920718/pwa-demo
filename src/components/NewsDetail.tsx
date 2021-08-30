import { useState } from "react";
import { Spin, Typography, Image } from "antd";
import { useAsyncRetry } from "react-use";
import qs from "qs";
import dayjs from 'dayjs'
const NewsDetail = () => {
  const { id }: { id?: string } = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  });
  const [imgObj, setImgObj] = useState<any>({});
  const { loading } = useAsyncRetry(async () => {
    return fetch(`https://uploadbeta.com/api/pictures/get/?id=${id}`)
      .then((res) => res.json())
      .then(setImgObj);
  }, [id]);
  console.log(id);

  return (
    <div style={{ padding: "20px 30px" }}>
      <Spin spinning={loading}>
        <Image src={`https://uploadbeta.com/_s/${imgObj.url}`} width="100%" />
        <Typography.Title></Typography.Title>
        <Typography.Paragraph type="secondary">
          {imgObj.title}
          <br />
          {imgObj.comment}
          <br />
          更新时间：{dayjs(imgObj.last*1000).format('YYYY-MM-DD')}
        </Typography.Paragraph>
      </Spin>
    </div>
  );
};

export default NewsDetail;
