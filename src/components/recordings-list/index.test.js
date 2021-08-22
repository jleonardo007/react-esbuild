import { screen, render } from "@testing-library/react";
import RecordingsList from ".";

describe("Recordings list tests", () => {
  test("Should render no recording section", () => {
    render(<RecordingsList audio={null} />);

    expect(screen.getByText(/you don't have records/i)).toBeInTheDocument();
  });

  test("Should render an audio tag", () => {
    render(<RecordingsList audio="recorded-user-voice" />);

    expect(screen.getByRole("heading", { level: 1, name: /your recordings/i })).toBeInTheDocument();
    expect(screen.getByTestId(/audio/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /delete this audio/i })).toBeInTheDocument();
  });
});
