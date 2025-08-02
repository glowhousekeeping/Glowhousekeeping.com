import { Card, Button } from "antd"
import { Link } from "next/link"

const JoinOurTeamPage = () => {
  return (
    <div className="flex justify-center">
      <Card title="Cleaning Specialist" style={{ width: 300 }}>
        <p>We are currently hiring a Cleaning Specialist to maintain our office cleanliness.</p>
        <Button type="primary">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfQw7w9W2w9W2w9W2w9W2w9W2w9W2w9W2w9W2w9W2w9W2w9W2w/viewform">
            Apply
          </Link>
        </Button>
      </Card>
    </div>
  )
}

export default JoinOurTeamPage
