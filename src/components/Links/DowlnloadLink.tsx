import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface DownloadLinkProps extends React.HTMLAttributes<HTMLLinkElement> {
  fileName: string;
  fileUrl: string;
}

export default function DownloadLink({ fileName, fileUrl }: DownloadLinkProps) {
  return (
    <a href={fileUrl} download={fileName}>
      <FontAwesomeIcon
        className="mr-2 text-base text-gray-700"
        icon={faDownload}
      />
      {fileName}
    </a>
  );
}
