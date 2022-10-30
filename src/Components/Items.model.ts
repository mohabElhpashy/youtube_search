export interface ItemsProps {
  // thumbnail: {
  //   heigh: {
  //     url: string;
  //   };
  // };
  // title: string;
  // description: string;
  // channelTitle: string;
  // createdAt: Date;

  Results: {
    snippet: {
      channelTitle: string;
      thumbnails: {
        medium: {
          url: string;
        };
      };
      title: string;

      publishTime: string;
      description: string;
    };
    pageInfo: {
      totalResults: number;
    };
  }[];
}
