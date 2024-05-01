export default function UserProfile({ params }: any) {
  return (
    <div>
      <h1>Profile</h1>
      <p>Profile pagae of {params.id}</p>
    </div>
  );
}
