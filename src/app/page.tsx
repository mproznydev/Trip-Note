"use client"

import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Modal,
  Button
} from '@mantine/core';

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <main>
      <Button onClick={()=>setIsModalOpen(true)}>Login</Button>

      <Modal opened={isModalOpen} onClose={()=>setIsModalOpen(false)}>
      <Container size={420} my={10}>
      <Title ta="center">
        Welcome back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor size="sm" component="button">
          Create account
        </Anchor>
      </Text>

        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl">
          Sign in
        </Button>
    </Container>

        
      </Modal>
    </main>
  );
}
