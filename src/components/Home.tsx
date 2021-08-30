import { Typography, List, Image, Spin, Button } from "antd";
import { useState } from "react";
import { useAsyncRetry, useSetState } from "react-use";
import { useHistory } from "react-router-dom";
function string10to62(number: string | number) {
  let chars =
      "0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ".split(
        ""
      ),
    radix = chars.length,
    qutient = +number,
    arr = [];
  do {
    const mod = qutient % radix;
    qutient = (qutient - mod) / radix;
    arr.unshift(chars[mod]);
  } while (qutient);
  return arr.join("");
}
const Home = () => {
  const [list, setList] = useState<any[]>([]);

  const history = useHistory();
  const [params, setParams] = useSetState({ start: 1, offset: 10 });
  const { loading } = useAsyncRetry(async () => {
    return fetch(
      `https://uploadbeta.com/api/pictures/search/?key=BingEverydayWallpaperPicture&start=${params.start}&offset=${params.offset}`
    )
      .then((res) => res.json())
      .then((res) => {
        setList([...list, ...res]);
      });
  }, [params.start]);

  const handleLoadMore = () => {
    const start = params.start + params.offset;
    setParams({ start: start });
  };

  const goToDetail = (id: any) => {
    history.push(`/detail?id=${string10to62(id)}`);
  };

  return (
    <div className="App">
      <Typography.Title level={2}>图片素材</Typography.Title>
      <img
        style={{ width: "100%" }}
        src="https://uploadbeta.com/_s/upload/2015/07/16/a9d64bab74fe51c0208f0267cb8425cd.jpg"
        alt=""
      />
      <List
        dataSource={list}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Image
              width="100%"
              preview={false}
              src={`https://uploadbeta.com/_s/${item.url}`}
              onClick={() => goToDetail(item.id)}
            ></Image>
          </List.Item>
        )}
      >
        {loading && <Spin />}
      </List>
      <Button onClick={handleLoadMore}>加载更多</Button>
    </div>
  );
};

export default Home;
