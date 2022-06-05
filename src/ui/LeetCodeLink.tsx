export type LeetCodeLinkProps = {
  link: string;
  title: string;
  description: string;
}

const LeetCodeLink: React.FC<LeetCodeLinkProps> = ({ link, title, description }) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={link}
    style={{
      display: 'block',
      textDecoration: 'none',
      flexGrow: 1,
      minWidth: '0px',
      margin: '24px 0'
    }}
  >
    <div
      role="button"
      tabIndex={-1}
      style={{
        width: '100%',
        height: '108px',
        userSelect: 'none',
        transition: 'background 20ms ease-in 0s',
        cursor: 'pointer',
        display: 'flex',
        flexWrap: 'wrap-reverse',
        alignItems: 'stretch',
        textAlign: 'left',
        overflow: 'hidden',
        border: '1px solid rgba(55, 53, 47, 0.16)',
        borderRadius: '3px',
        position: 'relative',
      }}
    >
      <div
        style={{
          flex: '4 1 180px',
          padding: '12px 14px 14px',
          overflow: 'hidden',
          textAlign: 'left',
        }}
      >
        <div
          style={{
            fontSize: '14px',
            lineHeight: '20px',
            color: 'rgb(55, 53, 47)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            minHeight: '24px',
            marginBottom: '2px',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: '12px',
            lineHeight: '16px',
            color: 'rgba(55, 53, 47, 0.6)',
            height: '32px',
            overflow: 'hidden',
          }}
        >
          {description}
        </div>
        <div style={{ display: 'flex', marginTop: '6px' }}>
          <img
            src="https://www.notion.so/image/https%3A%2F%2Fleetcode.com%2Ffavicon-192x192.png?table=block&amp;id=4273de83-ea04-4ee6-9f71-dd11d49df7d5&amp;spaceId=e6101d44-5bd1-4204-a084-2305cec36bc0&amp;userId=107ee15f-5a89-48ac-a4c7-49e65ba1133e&amp;cache=v2"
            style={{
              width: '16px',
              height: '16px',
              minWidth: '16px',
              marginRight: '6px',
            }}
          />
          <div
            style={{
              fontSize: '12px',
              lineHeight: '16px',
              color: 'rgb(55, 53, 47)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {link}
          </div>
        </div>
      </div>
      <div
        style={{
          flex: '1 1 180px',
          display: 'block',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: '0px',
          }}
        >
          <div style={{ width: '100%', height: '100%' }}>
            <img
              src="https://www.notion.so/image/https%253A%252F%252Fleetcode.com%252Fstatic%252Fimages%252FLeetCode_Sharing.png%3Ftable=block&id=4273de83-ea04-4ee6-9f71-dd11d49df7d5&spaceId=e6101d44-5bd1-4204-a084-2305cec36bc0&width=500&userId=107ee15f-5a89-48ac-a4c7-49e65ba1133e&cache=v2"
              style={{
                display: 'block',
                objectFit: 'cover',
                borderRadius: '1px',
                width: '100%',
                height: '100%'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </a>
);

export default LeetCodeLink;
