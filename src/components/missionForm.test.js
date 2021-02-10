import React from "react";
import { render, screen } from "@testing-library/react";
import MissionForm from "./MissionForm";
import userEvent, { useEvent } from '@testing-library/user-event';

test("MissionForm renders", () => {
  render(<MissionForm />);
});

test("MissionForm renders properly when fetchingData", () => {
  render(<MissionForm isFetchingData={true} />);

  screen.getByText("we are fetching data");
});

test('MissionForm renders a button when not fetching data', () => {
    render(<MissionForm isFetchingData={false} />);
    expect(() => screen.getByRole('button')).not.toThrow()
    expect(() => screen.getByText("we are fetching data")).toThrow()
});

test("getData is called when button is pressed", () => {
    const mockGetData = jest.fn();
    render(<MissionForm isFetchingData={false} getData={mockGetData} />);
    const btn = screen.getByText(/get data/i)

    userEvent.click(btn);
    expect(mockGetData).toBeCalledTimes(1);
});